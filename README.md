# TaskBox 

TaskBox is an email client inspired by [Mailbox](http://www.mailboxapp.com/). 

<img src="https://raw.githubusercontent.com/asbjornenge/taskbox/master/readme-images/iphone.png" alt="mobile-screenshot" width="250">
<img src="https://raw.githubusercontent.com/asbjornenge/taskbox/master/readme-images/postpone.png" alt="desktop-postpone-screenshot" width="250">

## Story

I am an [Inbox Zero](http://www.43folders.com/izero) freak.  

It just means I treat my email as tasks, and my inbox as a tasklist. I also do it with tweets. Things I should read, watch, look into. They all make their way to my inbox and are turned into tasks. 

I have been using [Mailbox](http://www.mailboxapp.com/) on my phone since it launched and have been really really happy with it. I was also using the desktop version before moving to Linux a while back. Naturally, I was pretty bummed when they announced they were [saying goodbye](https://blogs.dropbox.com/mailbox/2015/12/saying-goodbye/).  

This inflamed an itch I've been having for a while; services suck!! Unless they are [F/OSS](https://en.wikipedia.org/wiki/Free_and_open-source_software) and I can host them myself I'm moving away. Same goes for apps. Loosing the Mailbox desktop app was a pain, and now on the phone too. So, I decided to scratch back and [TaskBox](http://taskbox.email) was born.

[TaskBox](http://taskbox.email) is an email (& twitter) client. It provides a convenient interface for turning things onto tasks. It also support postponing tasks i the same easy way as Mailbox. It is neither [Tweetdeck](https://tweetdeck.twitter.com) nor [Google Inbox](https://www.google.com/inbox/) nor will it. TaskBox is focused around tasks. 

## TODO

Anything I put here is **HELP WANTED** :wink:

* VISUAL DESIGN (please)
* UNDO
* Twitter support
* Gesture support
* Documentation - Getting started
* Documentation - Helping out
* Documentation - Usage 
* Documentation - Hosting a nylas-sync-engine

**To help out, please spark a discussion by opening an [issue](https://github.com/asbjornenge/taskbox/issues).** :grin:

## Design (technical)

TaskBox is a webapp. It works on both mobile phones (`add-to-homescreen`) and desktops. It works offline and can also sync to multiple devices. 

It uses the [nylas-sync-engine](https://github.com/nylas/sync-engine) as the email API. It's an open source imap sync engine. I actually tried making something similar to TaskBox once before, but writing the imap sync engine was just too much work. So I was super happy when [nylas](https://www.nylas.com/) came along. To get started you can just sign up to their hosted version, but you can also host your own if you want to. 

Instead of using *labels* or *folders* in imap, TaskBox stores tasks separately. For various reasons; offline-first, adding metadata, markdown support. 
TaskBox uses [PouchDB](http://pouchdb.com/) for storing tasks. PouchDB is offline-first and can replicate to any [couchdb](http://couchdb.apache.org/).

It's a single page app built using [React](https://facebook.github.io/react/) and bundled with [browserify](http://browserify.org/).

## Design (visual)

I am REALLY NOT a visual designer.  
I can barely use Gimp.  
I know it looks like :poop: right now.  
Please HALP!  

I do like and use a lot of terminal apps. I considered using [react-blessed](https://github.com/Yomguithereal/react-blessed), but I also like images and mobile phones... I still want it to look like a terminal app. At least that should be the default, to scare away muggles. But it should definately support themes. Need to hatch a good solution for that.

## Getting Started 

Just head over to [taskbox.email](http://taskbox.email) and start adding some tasks. For mobile you can use the `add-to-homescreen` functionality to get an app icon etc. 

### Email integration

* Set up a nylas account.
* Take your urls and secrets and head over to [settings](http://taskbox.email/#/settings)
* Restart the app

### Task sync

* Set up a couchdb somewhere.
* Create a database
* Take the url to the database over to [settings](http://taskbox.email/#/settings)
* Restart the app

enjoy.
