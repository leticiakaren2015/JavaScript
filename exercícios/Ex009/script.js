function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor , digite um número!')
    } else {
        let n = Number(num.value)
        let count = 1
        tab.innerHTML = ''
        while (count <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${count} = ${n*count}`
            item.value = `tab${count}`
            tab.appendChild(item)
            count++
        }
    }
}