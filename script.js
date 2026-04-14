let step = 1;

function runProgress(text, speed, callback) {
    const status = document.getElementById("status");
    const progressBar = document.getElementById("progress-bar");

    // hapus efek blink lama
    status.classList.remove("blink");

    status.textContent = text;
    progressBar.style.width = "0%";

    let width = 0;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            if (callback) callback();
        } else {
            width++;
            progressBar.style.width = width + "%";
        }
    }, speed);
}

/* TOMBOL ATAS (MULTI STEP) */
function verifyDevice() {

    const deviceFrame = document.getElementById("device-frame");
    const gallery = document.getElementById("gallery");
    const centerText = document.getElementById("center-text");
    const deleteBtn = document.getElementById("delete-btn");
    const btn = document.querySelector("button[onclick='verifyDevice()']");
    const input = document.getElementById("device-number");

    // STEP 1 → VERIFIKASI
    if (step === 1) {

        runProgress("Sedang Verifikasi Kode Script Malware Device...", 50, () => {

            deviceFrame.style.display = "block";

            gallery.style.display = "none";
            centerText.style.display = "block";

            deleteBtn.style.display = "none";

            document.getElementById("status").textContent =
            "Kode Script Malware Device Aktif";

            // ubah input & tombol
            input.placeholder = "Nomor Target Atau User ID Target";
            btn.textContent = "🔍 Inject File Target";

            step = 2;
        });
    }

    // STEP 2 → AKSES FILE
    else if (step === 2) {

        runProgress("Sedang Mengakses File Tersembunyi Target...", 50, () => {

            centerText.style.display = "none";
            gallery.style.display = "grid";

            deleteBtn.style.display = "block";

            const status = document.getElementById("status");

            status.textContent =
            "Akses File Tersembunyi 479 Berhasil DiTemukan";

            // teks berkedip
            status.classList.add("blink");

            step = 3;
        });
    }
}

/* STEP 3 → DELETE */
document.getElementById("delete-btn").onclick = function () {

    this.style.display = "none";

    runProgress("Delete Semua Foto & Video Yang Tersebar...", 50, () => {

        document.getElementById("gallery").innerHTML = `
        <p style="
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        color:lime;
        font-size:13px;
        text-align:center;
        line-height:1.6;
        white-space:nowrap;
        z-index:999;">
        Foto & Video Delete Script 100 GB <span style="color:red;">ERROR</span><br>
        Di Butuhkan Inject Script Malware 300 GB<br>
        Untuk Mengapus Semua Files
        </p>
        `;
    });
};