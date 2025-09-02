# Quartz/Unix Cron Component - Angular

# @k0say/ng-cron

This library is a fork of [@sbzen/ng-cron](https://www.npmjs.com/package/@sbzen/ng-cron),
originally created by **sbzen** and licensed under MIT.

This fork updates Angular and dependencies to newer versions (Angular 19) and introduces
minor improvements for compatibility.

See [LICENSE](./LICENSE) and [NOTICE](./NOTICE) for details.

[Angular](https://angular.io/) cron widget built from the ground up using only [Bootstrap 4](https://getbootstrap.com/) CSS.

Please check the [demo & documentation](https://ngcron.emptyui.com/) and the list of
[issues](https://github.com/ua-cron/angular/issues) to see all the things we are working on. Feel free to make comments there.

<p align="center">
	<a href="https://ngcron.emptyui.com/">
		<img
			width="200"
			src="https://res.cloudinary.com/dwkakr4wt/image/upload/v1661086526/cron/ngcron.png"
			alt="ng-cron">
	</a>
</p>

<p align="center">
	<a href="https://badge.fury.io/js/%40k0say%2Fng-cron">
		<img
			src="https://img.shields.io/npm/dm/@k0say/ng-cron.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen"
			alt="npm version">
	</a>
	<a href="https://npmjs.org/%40k0say%2Fng-cron">
		<img
			src="https://img.shields.io/npm/v/@k0say/ng-cron.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen"
			alt="npm downloads">
	</a>
</p>

## Getting Started

This is an open source project that builds a cron builder component for Angular applications.
It supports Quartz/Unix cron string formats for both input and output.
Inspired by this [non-angular](https://www.freeformatter.com/cron-expression-generator-quartz.html) implementation.

## Installation
You can use either the npm or yarn command-line tool to install packages.
```
npm install --save @k0say/ng-cron
```

## Display the cron component
You need to import the QuartzCronModule that you want to display by adding the following lines to your ngModule.

```
import { QuartzCronModule } from '@k0say/ng-cron';

@NgModule ({
  imports: [QuartzCronModule]
})
```
Add the cron component into yout template
```
<quartz-cron></quartz-cron>
```

## Usage & Demo
Main source of API documentation and usage scenarios available here: https://ngcron.emptyui.com/.


## Compatibility
The only two required dependencies are Angular and cron-core.
The Bootstrap CSS is optional as you can use this component with your own styling.
Here is the versions compatibility list:

| Ng Cron          |    Angular    |  Bootstrap CSS |
| -------------    | ------------- | -------------- |
| 0.0.1            | 7.x.x         | 4.x.x          |
| 1.0.1            | 11.x.x        | 4.x.x          |
| 2.0.0            | 14.x.x        | 4.x.x          |
| 15.0.0           | 15.x.x        | 4.x.x, 5.x.x   |
| 16.0.0           | 16.x.x        | 4.x.x, 5.x.x   |
| 17.0.0           | 17.x.x        | 4.x.x, 5.x.x   |
| 18.0.0           | 18.x.x        | 4.x.x, 5.x.x   |
| 19.0.0           | 19.x.x        | 4.x.x, 5.x.x   |
