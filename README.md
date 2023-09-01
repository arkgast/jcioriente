# JCI Oriente

## Commands

    $ cd jcioriente

    $ yarn

    $ nx serve spotlight

### Add new projects


    $ nx g @nx/react:app <app name> --bundler vite

    $ nx g @nx/react:setup-tailwind --project=<app name>

    $ nx generate @nx/react:lib <lib name> --compiler swc --bundler vite --unitTestRunner vitest

    $ firebase emulators:start

    $ firebase hosting:channel:deploy <channel-id>

    > port is defined in firebase.json file   
