import smtplib
from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText

msg = MIMEMultipart()
msg['From'] = 'no-reply@lojiksol.com'
msg['To'] = 'jkumwenda@gmail.com'
msg['Subject'] = 'simple email in python'
message = 'here is the email'
msg.attach(MIMEText(message))

mailserver = smtplib.SMTP('lojiksol.com', 465)
# identify ourselves to smtp gmail client
mailserver.ehlo()
# secure our email with tls encryption
mailserver.starttls()
# re-identify ourselves as an encrypted connection
mailserver.ehlo()
mailserver.login('no-reply@lojiksol.com', 'no-reply@lojiksol')

mailserver.sendmail('no-reply@lojiksol.com', 'jkumwenda@gmail.com', msg.as_string())

mailserver.quit()


# import smtplib
# import ssl

# port = 465  # For SSL
# smtp_server = "lojiksol.com"
# sender_email = "no-reply@lojiksol.com"  # Enter your address
# receiver_email = "jkumwenda@gmail.com"  # Enter receiver address
# password = "no-reply@lojiksol"
# message = """\
# Subject: Hi there

# This message is sent from Python."""

# context = ssl.create_default_context()
# with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
#     server.login(sender_email, password)
#     server.sendmail(sender_email, receiver_email, message)
