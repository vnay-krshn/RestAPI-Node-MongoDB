
var insert=document.querySelector('#insert')
var sub=document.querySelector('#post')
var retrieve=document.querySelector('#retrieve')
var search=document.querySelector('#get')

sub.addEventListener('click',()=>{
    var RegNumber=insert.value
    var data={RegNumber}
    var options={
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data)          
    }
    fetch('/blacklist',options)
})

search.addEventListener('click', async ()=>{
    const temp= await fetch('/cctv')
    const json=await temp.json()
    for(item of json){
        const root=document.getElementById('display')
        const RegNumImg=document.createElement('div')
        const RegNum=document.createElement('div')
        const CameraId=document.createElement('div')
        const date=document.createElement('div')

        RegNumImg.textContent=`RegNumImg:${item.RegNumberImg}`
        RegNum.textContent=`RegNum:${item.RegNumber}`
        CameraId.textContent=`CameraId:${item.CameraId}`
        date.textContent=`Date:${item.Date}`

        root.append(RegNumImg,RegNum,CameraId,date)
        document.body.append(root)
    }
    console.log(json)
})

  