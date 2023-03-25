
// chat window requests
// err_f can be null
function chatRequest(input, callback, err_f) {
    fetch('/api/text', {
        method: 'POST',
        body: JSON.stringify({
          "text": input
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

function relevantConversationRequest(input, callback, err_f) {
    fetch('/api/convo-search', {
        method: 'POST',
        body: JSON.stringify({
            // ???
        }),
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