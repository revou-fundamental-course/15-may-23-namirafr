function hitungLuas() {
    var sisiLuas = document.getElementById("sisi-luas").value;
    if (parseInt(sisiLuas)) {
        var luas = sisiLuas * sisiLuas;
        document.getElementById("rumus-luas").innerHTML = "L = S ✕ S"
        document.getElementById("hitung-luas").innerHTML = "L = " + sisiLuas + " ✕ " + sisiLuas;
        document.getElementById("output_luas").innerHTML = "L = " + luas;
    } else {
        alert("Input tidak boleh kosong!")
    }
}

function hitungKeliling() {
    var sisiKeliling = document.getElementById("sisi-keliling").value;
    var sisiKeliling = document.getElementById("sisi-keliling").value;
    if (parseInt(sisiKeliling)) {
        var keliling = sisiKeliling * 4;
        document.getElementById("rumus-keliling").innerHTML = "L = S ✕ 4"
        document.getElementById("hitung-keliling").innerHTML = "L = " + sisiKeliling + " ✕ 4";
        document.getElementById("output_keliling").innerHTML = "L = " + keliling;
    } else {
        alert("Input tidak boleh kosong!")
    }
}

function resetLuas() {
    document.getElementById("sisi-luas").value = "";
    document.getElementById("output_luas").innerHTML = "";
    document.getElementById("hitung-luas").innerHTML = "";
    document.getElementById("rumus-luas").innerHTML = "";
}

function resetKeliling() {
    document.getElementById("sisi-keliling").value = "";
    document.getElementById("output_keliling").innerHTML = "";
    document.getElementById("hitung-keliling").innerHTML = "";
    document.getElementById("rumus-keliling").innerHTML = "";
}