/**
 * Created by Rober on 08/05/15.
 */
var cp = require('child_process');
var fs = require('fs');
var dir = process.env.PWD + '/test_plates';
function callCommand(filename) {
    var command = 'alpr -c eu --clock ' +  filename.toString();
    //var command = 'node -v';
    cp.exec(command, function(error, stdout, stderr) {
        console.log(filename);
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    })
}

fs.readdir(dir, function(err, list){
    if (err) return done(err);
    list.forEach(function (filename, index) {
        //console.log(dir.toString() + '/' + filename);
        var path_to_filename =  dir + '/' +list[index];
        callCommand(path_to_filename);
    });
});

