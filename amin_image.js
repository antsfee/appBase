var Imagemin =require('imagemin');

var imagemin = new Imagemin()
				.src('src/static/img/*.{gif,jpg,png,svg}')
				.dest('../../../build/static/img')
				.use(Imagemin.jpegtran({progressive:true}));

imagemin.run(function(err,files){

	if(err){

		throw err ;
	}

	console.log(files[0]);

});


// https://github.com/imagemin/imagemin