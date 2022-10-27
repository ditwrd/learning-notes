## Buying a Domain Name

DNS Records
A record = Maps name to IP address
CNAME = Maps name to name

## Domain Setup

Need 2 A record
- @
- www

You need to the correct nameserver from the domain provider

## Server Setup, User Setup
1. Update software
	1. `apt update`
	2. `apt upgrade`
1. Create a new user
	1. `adduser $USERNAME` -> whatever you want
1. Make that user a super user
	1. `usermod -aG sudo $USERNAME`
	2. `su $USERNAME`
	3. `sudo cat /var/log/auth.log`
2. Enable login for new user
	1. `cd ~`
	2. `mkdir -p ~/.ssh`
	3. `vi ~/.ssh/authorized_keys`
	4. Paste public key
3. Disable root login
	1. `sudo vi /etc/ssh/sshd_config`
	2. Permit RootLogin: no

## Nginx Overview and Configuration
- /var/www/ default folder to place anything
- try_files try everythings

## NodeJS

## Application Architecture
- 


Tips: 
- `!!` to use the same command as before
- `tail -f` help to follow loggin

