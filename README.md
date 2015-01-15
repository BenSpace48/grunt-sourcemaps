## Sourcemaps with grunt

This is the base repo for my sourcemaps grunt project, at the moment is has the following features below. If you'd like anything else adding feel free to create a pull request or let me know.

#### To get up and running

1. Download this repo as a zip
2. Extract gruntfile.js and Gruntfile.js to the themes root folder, e.g ```Betterbathrooms/skin/frontend/enterprise/bb-newtheme```
3. CD to this directory in terminal/CMD and run ```npm install``` - This will install the required packages to node_modules
4. Once this has completed run ```grunt``` 
5. Enjoy

Once you have compiled your scss you should be able to view/edit/save the scss files through your web browser. Details on how to set up your browser to work with sourcemaps - http://thesassway.com/intermediate/using-source-maps-with-sass 

#### Sourcemaps

Enables SCSS Sourcemaps for faster debugging, using the sourcemaps through Grunt also fixes an issue I was having with default Compass sourcemaps, win win.

To enable or disable this you just need to change the sourcemap value under compass > dist/dev > sourcemap

This allows you to view and edit the scss files directly through your web browser (no more changing the value in inspect element, then again in your editor), instructions on how to do this are on http://thesassway.com/intermediate/using-source-maps-with-sass (or ask Ben)

#### Compass profiles

Compass profiles enable you to have compass run with different settings depending on the environment. For example when set to development (dev) mode the css will be expanded and include sourcemaps. When set to distribute (dist) the CSS will be compressed and no sourcemaps will be created. It will also force a full compile.

- Dev profile - The development profile is ran with the default grunt task (simply run 'grunt' in terminal/cmd).
- Distribution profile - The dist profile is ran with 'grunt deploy'
- You can also force the dev profile by running 'grunt compass:force'

#### JShint

This will lint gruntfile to ensure there are no errors, it can also be set up to lint other JS files.

- This is ran in the default task by running 'grunt' in the terminal/cmd

#### Watch task

This watches the specified files and runs the specified task when any of those files change. It is currently set up for the following:

- When the gruntfile changes JSlint will run to check for any errors
- When any scss files are changes it will compile the files through compass
- When those css files are generated it refreshes the page if the user has livereload enabled in the browser.

- This is ran in the default task by running 'grunt' in the terminal/cmd

## Notes

- Settings in the gruntfile are relative to the directory the gruntfile is in.
- More info on grunt can be found on their website http://gruntjs.com/

#### Tasks

Tasks can be created with the following code:

    grunt.registerTask('TASKNAME', ['task1', 'task2:optionHere', 'task3']);

For example

    grunt.registerTask('example', ['jshint', 'compass:dev', 'watch']);

This creates a task with the name example, which can be excuted by running the command 'grunt example' in terminal/cmd. This task will run jshint, compass in the dev environment, and the watch task.


## Things to come

- Speed improvements and optimisations
- Branches for each project
- Possibly more tasks, although this may be in a different repo
- Possibly CSS/HTML lints
- Check if there's an easier way than having the file in the theme folder, possibly having it in the root folder and specifying the theme directory. It would be good if we could watch several directories with one task (e.g desktop and mobile) but I'm not sure this is possible due to compass' compile limitations.

## FAQ

**Does Grunt take longer than Compass?**

No it shouldn't. Grunt uses Compass to compile so it should take the same amount of time. Once Libsass is compatible (if ever) with Compass compile times should be cut by >20x.
