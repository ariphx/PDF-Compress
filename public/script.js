document.getElementById('fileUpload').addEventListener('change', function () {
    const fileName = this.files[0] ? this.files[0].name : 'No file selected';
    document.getElementById('fileName').textContent = fileName;
});

document.getElementById('uploadForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const sizeValue = parseFloat(document.getElementById('sizeInput').value);
    const sizeUnit = document.getElementById('sizeUnit').value;

    if (!sizeValue || sizeValue <= 0) {
        alert("Please enter a valid file size!");
        return;
    }

    // Konversi ukuran ke Bytes
    let targetSizeBytes = sizeUnit === 'MB' ? sizeValue * 1024 * 1024 : sizeValue * 1024;
    formData.append("targetSizeBytes", targetSizeBytes);

    const loading = document.getElementById('loading');
    loading.style.display = 'flex';

    try {
        const response = await fetch('/compress', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) throw new Error('Compression failed');

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;

        // Nama file tetap asli, hanya ditambah _compressed
        const originalFileName = document.getElementById('fileUpload').files[0].name.replace('.pdf', '');
        a.download = `${originalFileName}_compressed.pdf`;

        document.body.appendChild(a);
        a.click();
        a.remove();
    } catch (error) {
        alert(error.message);
    } finally {
        loading.style.display = 'none';
    }
});

