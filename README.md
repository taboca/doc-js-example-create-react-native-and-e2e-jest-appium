# Introduction

In this article, we will take a project created with "create-react-native-app" and enable E2E (end-to-end) tests to an. In order to do this, we will eject from the default setup created by "create-react-native-app". Once we do that, we will then prepare Jest and Appium projects to have our end to end testing system working. In case you don't know, E2E tests are the kind of tests that brings up the whole application (in the emulator or in a device) and performs tests over the user interface. These kinds of tests are more intensive, or expensive, according to Mike Cohn's pyramid [2].  

This article/tutorial is based in [How to do End-to-End (E2E) Testing for React Native Android using Jest and Appium](https://medium.com/front-end-hacking/how-to-do-end-to-end-e2e-testing-for-react-native-android-using-jest-and-appium-27d75e4d831b), an article written by Heyse Li [1]. The difference, from this and Heyse' case is that this one was initiated using the create-react-native-app command line tool.

The code checked in this repository is intended to show the differences that were added to the original state of files after **create-react-native-app myAppAndE2ETests** program execution and after the "npm eject" command. Let's first contextualize some of the conditions that are relevant to the context of my case:

* Mac OS X Sierra 10.12.6
* export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_111.jdk/Contents/Home
* export PATH=/Library/Java/JavaVirtualMachines/jdk1.8.0_111.jdk/Contents/Home/bin:$PATH
* export ANDROID_HOME=${HOME}/Library/Android/sdk
* export PATH=${PATH}:${ANDROID_HOME}/tools
* export PATH=${PATH}:${ANDROID_HOME}/platform-tools
* export ANDROID_SDK_ROOT=/Users/taboca/Library/Android/sdk (for the emulator to work)
* NodeJS available via nvm
* nvm use 8.6.0
* npm install -g react-native-cli

# The initial code — just a create-react-native-app myAppAndE2ETests

My initial state was created with:

```
create-react-native-app myAppAndE2ETests
```

```
cd myAppAndE2ETests
```

```
npm run eject
```

The above should transform your "create-react-native-app" style project in a regular React Native project.
