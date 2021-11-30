async function requestVal() {
    const data = await fetch("https://valorant-api.com/v1/contenttiers");
    console.log(data);
}

requestVal();