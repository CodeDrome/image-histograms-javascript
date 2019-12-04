function createHistograms()
{
	const Jimp = require("jimp");
	const imghist = require('./imagehistograms.js');

	Jimp.read("central_st_giles.jpg", function (err, photo)
	{
    	if (err)
    	{
    		console.error(err);
    	}
		else
		{
	 		const histred = imghist.histogramRGB(imghist.colorChannels.Red, photo);
			saveHistogram(histred, "histred.svg");

	 		const histgreen = imghist.histogramRGB(imghist.colorChannels.Green, photo);
			saveHistogram(histgreen, "histgreen.svg");

	 		let histblue = imghist.histogramRGB(imghist.colorChannels.Blue, photo);
			saveHistogram(histblue, "histblue.svg");
		}
	});
}


function saveHistogram(histogramstring, filename)
{
	const fs = require("fs");

	fs.writeFile(filename, histogramstring, function (err)
	{
		if (err)
		{
			console.error(err);
		}
		else
		{
			console.log(filename + ' saved');
		}
	});
}


createHistograms();
