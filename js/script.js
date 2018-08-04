var popup = document.getElementById('popupbox');
var close = document.getElementById('close');

close.onclick = function() {
    popup.style.display = 'none'
}

window.onclick = function(event) {
    if (event.target === popup){
        popup.style.display = 'none'
    }
}

var data = [
    {suku: "romawi", pasukan: ["Legionaire", "Pretorian", "Imperian", "Equites Legati", "Equites Imperatoris"],
    deskripsi: "Pasukan Bangsa Romawi merupakan pasukan yang Kuat, imbang dalam Kemampuan bertahan dan menyerang. Pasukan Romawi memerlukan waktu dan resourse yang paling banyak dari semua suku dalam melatih 1 pasukan, namun begitu pasukannya sangat menakutkan."} ,
    {suku: "teuton", pasukan: ["Clubswingers", "Spearman", "Axeman", "Paladin", "Teutonic Knight"], 
    deskripsi: "Pasukan Bangsa Teuton merupakan pasukan yang handal dalam menyerang dan merampok. Untuk membuat 1 pasukan tidak memerlukan resourse yang banyak, namun demikian pasukan suku Teuton sangat lemah sekali dalam bertahan."} ,
    {suku: "galia", pasukan: ["Phalax", "Swordsman", "Theututas Thunder", "Haeduan"],
    deskripsi: "Pasukan Bangsa Galia Merupakan Pasukan yang Hebat Dalam Bertahan, pasukan termurahnya pun pasukan yg handal dalam bertahan. Suku Galia pun mempunyai crany atau perangkap untuk mempertahankan desanya."}
]

function tampilpopup(suku){
    var imgpopup = document.querySelector('#imgpopup')
    var welcome = document.querySelector('.popup-kanan-atas h2')
    var judul = document.querySelector('.popup-kanan-bawah h2')
    var description = document.querySelector('#deskripsi')
    imgpopup.setAttribute('src', 'img/' + suku + '.png' )
    welcome.innerHTML = 'Selamat Datang didunia Travian Ksatria ' + document.getElementById('name').value
    judul.innerHTML = 'Suku ' + suku
    for (var i = 0; i < data.length; i++){
        if (suku === data[i].suku){
            description.innerHTML = data[i].deskripsi
            for (var j = 0; j < data[i].pasukan.length; j++){
                // var list = data[i].pasukan[j]
                var newLi = document.createElement('li')
                var newtroops = document.createTextNode(data[i].pasukan[j])
                newLi.appendChild(newtroops)
                var listtroops = document.getElementById('troops')
                listtroops.appendChild(newLi)
            }
        }
    }
}

function removeListTroops() {
    
}

function validasi(name) {
    if (name.length === 0){
        alert('Nama Harus diisi dulu ya :)')
        popup.style.display = 'none'
        return false
    } 
    return true
}

var pilihan = document.querySelectorAll('td img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function(){
        var name = document.getElementById('name').value
        console.log(name);
        if (validasi(name)){
            popup.style.display = 'block'
            var pilihansuku = pil.className
            tampilpopup(pilihansuku)
        }        
    })
})
