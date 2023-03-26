
// chat window requests
// err_f can be null
const chatRequest = (input, questionUno, callback, err_f) => {
    console.log("--> input: " + input);
    console.log("--> questionUno: " + questionUno);
    fetch('/api/text', {
        method: 'POST',
        body: JSON.stringify({
            text: input,
            questionUno: questionUno
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
         .then((response) => response.json())
         .then((data) => {
            // console.log(data);
            callback(data);
         })
         .catch((err) => {
            console.log(err.message);
            if (err_f === undefined || err_f === null) {
                alert('Chat window request failed!');
            } else {
                err_f(err);
            }
         });
}

const pickClientPromptRequest = (selections, callback, err_f) => {
    fetch('/api/categoricalQuery', {
        method: 'POST',
        body: JSON.stringify(selections),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
         .then((response) => response.json())
         .then((data) => {
            // console.log(data);
            callback(data);
         })
         .catch((err) => {
            console.log(err.message);
            if (err_f === undefined || err_f === null) {
                alert('Conversation request failed!');
            } else {
                err_f(err);
            }
         });
}

export {chatRequest, pickClientPromptRequest};