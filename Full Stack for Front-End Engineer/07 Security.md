## Why Security?
- root access = gg

## Read auth.log

## Security Checklist
- SSH
- Firewalls
- Updates
- Two factor auth
- VPN

- Zero day -> unpatched vulnerability

## Unattended Upgrades
- add unattended upgrades

## Security Etchis

## Firewalls
- Basically a filtering ingress and egress
- nmap -> scan open port and even know the software used on that port (using -sV)

## Ports
- communications endpoint that maps to a specific process
- less /etc/services, maybe you can see ports?


## Uncomplicated Firewall
- ufw :)
	- deny -> blackhole requests
	- reject -> explicitly say port is closed

## Permissions
- 777 is a no no
- user - group - anybody else
	- 4 - read
	- 2 - write
	- 1 - execute

## Upgrade Node?
