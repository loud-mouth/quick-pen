const CPU_USAGE = document.getElementById('cpu');
const CLOSE_BTN = document.getElementById('closebtn');

CLOSE_BTN.addEventListener('click', CloseApp);

function CloseApp(){
    console.log('closing app');
    api.close();
}

setInterval(UpdateStats, 1000);

async function UpdateStats () {
    const cpuUsed = await api.getCurrentLoad();
    // console.log(`used ${cpuUsed}`);
    CPU_USAGE.innerHTML = 'CPU: '+ cpuUsed.toFixed(1) + '%';
}
