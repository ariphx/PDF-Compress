const express = require('express');
const multer = require('multer');
const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/compress', upload.single('pdf'), (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    const filePath = req.file.path;
    const originalFileName = path.parse(req.file.originalname).name; // Nama file asli
    const targetSizeBytes = parseInt(req.body.targetSizeBytes, 10);
    const tempOutputPath = `compressed/${originalFileName}_compressed_temp.pdf`;
    const finalOutputPath = `compressed/${originalFileName}_compressed.pdf`;

    if (!targetSizeBytes || targetSizeBytes <= 0) {
        return res.status(400).json({ error: 'Invalid target size' });
    }

    const compressPDF = (input, output, quality, resample, callback) => {
        const command = `
            gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/prepress \
            -dNOPAUSE -dQUIET -dBATCH -dDownsampleColorImages=true -dColorImageResolution=${resample} \
            -dMonoImageResolution=${resample} -dGrayImageResolution=${resample} -sOutputFile=${output} ${input}
        `;
        exec(command, (error) => {
            if (error) return callback(error, null);
            callback(null, fs.statSync(output).size);
        });
    };

    // **Adaptive Compression untuk Mencapai Target Size**
    let resampleDPI = 300;
    
    const adjustCompression = () => {
        compressPDF(filePath, tempOutputPath, '/prepress', resampleDPI, (err, size) => {
            if (err) return res.status(500).json({ error: 'Compression failed', details: err.message });

            if (size <= targetSizeBytes || resampleDPI <= 50) {
                fs.renameSync(tempOutputPath, finalOutputPath);
                return res.download(finalOutputPath, `${originalFileName}_compressed.pdf`);
            } else {
                // Turunkan DPI untuk mengurangi ukuran file lebih lanjut
                resampleDPI -= 50;
                adjustCompression();
            }
        });
    };

    adjustCompression();
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

