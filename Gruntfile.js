module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    less: {

        production: {
        options: {
        compress: true,
        },
        files: {
        'dist/styles/main.min.css': 'src/styles/estilos.less'
        } 
                }

    },

     uglify:{
    target: {
    files: {
    'dist/scripts/main.min.js' : 'src/scripts/java.js'
            }
            }
            }

})


grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', [ 'less', 'uglify']);

}