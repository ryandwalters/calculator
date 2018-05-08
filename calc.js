window.onload = function () {

    var buttons = document.getElementById('buttons');
    var clear = document.getElementById('clear');
    var answer = document.getElementById('answer');

    buttons.addEventListener('click', function(e) {

        if (e.target.nodeName === 'LI') {

            //v is the value of the button
            var v = e.target.innerHTML;
            if (v === '=') {
                try { 
                    answer.innerHTML = eval(answer.innerHTML)

                } catch (e) {
                    answer.innterHTML = e.message;
                }

            } else {
                answer.innerHTML += v;
            }
        }
    });
//clear answer field
    clear.addEventListener('click', function () {
        answer.innerHTML = '';

    });

};
