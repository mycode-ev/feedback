function message() {
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let email = document.getElementById("email").value;

    const webhook = "https://discord.com/api/webhooks/1294398067952451694/VrFcFZH_RuHd9Emie3sfX1VpsUNSIQJuVk5RtuP1j1LU_oKoNrXEIDntfCYvIddTT2Fe";
    
    const content = `Name: ${name}\nMessage: ${message}\nEmail: ${email}`;
    
    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    
    const params = {
        content: content
    };
    request.send(JSON.stringify(params));
}
