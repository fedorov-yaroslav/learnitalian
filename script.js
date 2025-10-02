const token = "8451409637:AAFpMA4XRlsRy4jVuNbitYH5-nWHDglUxwc"; // из BotFather
const chatId = "-1003120709891";     // ID чата или канала

document.getElementById("tg-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = this.name.value;
    const phone = this.phone.value;
    const email = this.email.value;
    const telegram = this.telegram.value;

    const text = `
Имя: ${name}
Телефон: ${phone}
Email: ${email}
Телеграм: t.me/${telegram}`;


    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: "HTML"
        })
    })
        .then(r => r.json())
        .then(result => {
            if (result.ok) {
                alert("✅ Заявка отправлена!");
                this.reset();
            } else {
                alert("❌ Ошибка при отправке");
                console.error(result);
            }
        });
});