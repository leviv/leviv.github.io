from igramscraper.instagram import Instagram
from time import sleep

# Instagram login credentials
insta_username = 'levivillarreal'
insta_password = ''

instagram = Instagram()

# File to write to
file = open("following.txt", "w")

# Authentication
instagram.with_credentials(insta_username, insta_password)
instagram.login()
sleep(2)

# Get all followers
account = instagram.get_account(insta_username)
sleep(1)
following = instagram.get_following(account.identifier, 900, 100, delayed=True)

users = {}

# Loop through all users the logged in user is following
for following_user in following['accounts']:
    username = following_user.username
    users[username] = following_user
    print(username + ' account retrieved')

for user in users:
    account = users[user]
    username = account.username
    full_name = account.full_name

    writeString = username + "," + full_name + "\n"
    file.write(writeString)
    print(writeString)

    try:
        following = instagram.get_following(account.identifier, 1000, 100, delayed=True)

        # Loop through following that exist in users
        for following_user in following['accounts']:
            if following_user.username in users:
                print('\t' + following_user.username)
                file.write(following_user.username + "\n")

    # Catch errors from the finnicky api
    except:
        print('failed getting followers for user ' + user)

file.close()
