/*
-- Using built-in (HTML) form validation:

#1: required: 
Specifies whether a form field needs to be filled in before the form can be submitted.
-- Applicable in:
-> All input fields

#2: minlength and maxlength: 
Specifies the minimum and maximum length of textual data (strings).
-- Applicable in:
-> type = email
-> type = text
-> type = password
-> type = tel

#3: min, max, and step: 
Specifies the minimum and maximum values of numerical input types, and the increment, or step, for values, starting from the minimum.
-- Applicable in:
-> type = number
-> type = date
-> type = range

#4: type: 
Specifies whether the data needs to be a number, an email address, or some other specific preset type.

#5: pattern: 
Specifies a regular expression that defines a pattern the entered data needs to follow.
-- Applicable in:
-> type = email
-> type = password
-> type = tel
-> type = text

#6: multiple:
Allow user to upload/select/enter multiple option/file/input
-- Applicable in:
-> type = email
-> type = file

#7: accept:
Restrict file types (MIME types/extensions)
-- Applicable in:
-> type = file

#8: checked:
pre-select an option by adding the checked attribute:
-- Applicable in:
-> type = radio

#9: Disabled:
The disabled attribute grays out an option, making it unselectable 
-- Applicable in:
-> type = radio


*/

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(8080, () => {
	console.log('Server is up and listening on port: 8080');
});

/*
<script>
  document.querySelector('form').addEventListener('submit', function (e) {
    const fileInput = document.getElementById('file');
    const files = fileInput.files;
    const maxSize = 2 * 1024 * 1024; // 2 MB

    for (const file of files) {
      if (file.size > maxSize) {
        e.preventDefault();
        alert(`File "${file.name}" exceeds the 2 MB size limit.`);
        return;
      }
    }
  });
</script>




*/
