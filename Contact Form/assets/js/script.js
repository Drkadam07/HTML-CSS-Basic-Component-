     function sendmail(){
    
			var name = $('#Name').val();
			var email = $('#Sender').val();
			var subject = $('#Subject').val();
      var message = $('#Message').val();

			// var body = $('#body').val();

			var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
			//console.log(name, phone, email, message);

			Email.send({
        SecureToken:"",
				To: 'Add mail address ',
				From: "add mail address",
				Subject: "New message on contact from "+name,
				Body: Body
			}).then(
				message =>{
					//console.log (message);
					if(message=='OK'){
					alert('Your mail has been send. Thank you for connecting.');
					}
					else{
						console.error (message);
						alert('There is error at sending message. ')
						
					}

				}
			);
		}

