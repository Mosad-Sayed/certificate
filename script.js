const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const moInput = document.getElementById('mo')
const downloadBtn = document.getElementById('download-btn')

const image = new Image()
image.src = 'tp204-certificate-12.jpg'
image.onload = function () {
	drawImage()
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '25px Andalus'
	ctx.fillStyle = ''
	ctx.fillText(nameInput.value, 130, 193)
	ctx.fillText(moInput.value, 130, 310)

}

nameInput.addEventListener('input', function () {
	drawImage()
})

moInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'Certificate - ' + nameInput.value
})
