# Introduction

In this article, we will take a project created with "create-react-native-app" and enable E2E (end-to-end) tests to it. In order to do this, we will **eject** from the default setup created by "create-react-native-app".

Once we do that, we will then prepare Jest and Appium projects to have our end to end testing system working. In case you don't know, E2E tests are the kind of tests that brings up the whole application (in the emulator or in a device) and performs tests over the user interface. These kinds of tests are more intensive, or expensive, according to Mike Cohn's pyramid [2].  

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

Check the [initial files ](https://github.com/taboca/doc-js-example-create-react-native-and-e2e-jest-appium/commit/bf6beecd1a09f44f8a6b3c4d610d2ce4c0203097) after ejecting.

Similarly to the article by Heyse Li [1], this example focuses in Android; which explains why we are not bringing the XCode and other infrastructure necessary to generate IOS apps. To understand the dependencies necessary to build React-native -based apps for Android (or even IOS) please see [Getting Started -> Building Projects with Native Code](https://facebook.github.io/react-native/docs/getting-started.html) [3].

# Preparing for Jest and Appium

```
npm install --save-dev  appium appium-doctor
```

After these modules installed, you will have to update your package.json script section:

```
"scripts": {
		"start": "node node_modules/react-native/local-cli/cli.js start",
		"test": "jest",
		"appium": "appium",
		"appium:doctor": "appium-doctor"
	},
```

With that, run:

```
npm run appium:doctor
```

As you run the above, it may generate some warnings requesting you to perform actions, such as the necessary environment variables (JAVA_HOME, ANDROID_HOME, etc). According to [1], since we are working with Android, we can safely ignore the warning "WARN AppiumDoctor ✖ Carthage was NOT found!".

## Installing web driver

```
npm install --save-dev wd
```

## Running appium

```
npm run appium
```

This should bring up the Appium server in your localhost computer (0.0.0.0:4723). In my case, since I am using the same shell, I have put it in background.

## Running the device

```
adb devices
```

Pick the name of your device and keep it as you will soon add this reference in your test instructions file.  Alternativelly you may well establish your testing system using emulators. For additional information check [Start the emulator from the command line](https://developer.android.com/studio/run/emulator-commandline) [4].




# References

* [1](https://medium.com/front-end-hacking/how-to-do-end-to-end-e2e-testing-for-react-native-android-using-jest-and-appium-27d75e4d831b)

* [2](https://www.mountaingoatsoftware.com/blog/the-forgotten-layer-of-the-test-automation-pyramid)

* [3](https://facebook.github.io/react-native/docs/getting-started.html)

* [4](https://developer.android.com/studio/run/emulator-commandline)
