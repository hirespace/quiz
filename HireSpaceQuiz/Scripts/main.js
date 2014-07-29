$(document).ready(function(){
	var totalScore = 0;
	var totalQuestions = 0;

	// Set all radio buttons to empty
	$("input[type='radio']").prop('checked', false);

	// If clicking on a radio button hide the error message if it is there
	$("input[type='radio']").click(function(){
		$('[data-role=error]').addClass('hidden');
		$('[data-role="submit-answer"]').removeClass('btn-disabled hidden');
		$('.radio').removeClass('active');
		$(this).closest('.radio').addClass('active');
	});

	// On clicking onto next question
	$('[data-role=submit-answer]').click(function(event){
		var thisButton = $(this);
		var thisAnswer = $("input[type='radio']:checked");

		// If they have answered
		if (thisAnswer.length > 0) {
			$(this).find('.loading').removeClass('hidden');
			$(this).find('.button-text').addClass('hidden');
			thisAnswer = thisAnswer.val();
			var correctAnswer = answers()[thisButton.data('question') - 1];

			if (thisAnswer === correctAnswer) {
				if (localStorage.totalScore) {
					totalScore = localStorage.totalScore;
				}
				totalScore++;
				localStorage.setItem('totalScore', totalScore);
			}
			if (localStorage.totalQuestions) {
				totalQuestions = localStorage.totalQuestions;
			}
			totalQuestions ++;
			localStorage.setItem('totalQuestions', totalQuestions);
			$(this).removeClass('btn-disabled hidden');
		}
		// Otherwise show an error
		else {
			event.preventDefault();
			$('[data-role="submit-answer"]').addClass('hidden');
			$('[data-role=error]').removeClass('hidden');
		}
	});

	//Play again and reset
	$('[data-role=reset]').click(function(event){
		localStorage.setItem('totalScore', 0);
		localStorage.setItem('totalQuestions', 0);
	});

	// Fill in scores
	if ($('[data-role=score]')) {
		$('[data-role="score"]').html(localStorage.totalScore + '<span class="smaller">out of</span>' + localStorage.totalQuestions);
		$('[data-role="score-description"]').html(descriptions()[localStorage.totalScore]);
		$('.addthis_sharing_toolbox').attr('data-title', ('I scored ' + localStorage.totalScore + ' out of ' + localStorage.totalQuestions + ' on the Hire Space Quiz! Give it a go!'));
	}

	// The final score descriptions
	function descriptions() {
		return [
		"<h5 class='upper'>Waste of Space</h5>Wuhoh! Your mind is like <a href='http://hirespace.com/Venues/1024/Shoreditch-Town-Hall'>Shoreditch Town Hall</a>, but without the pretty face.",
		"<h5 class='upper'>Spaced Out</h5>Old and rusty and like the <a href='http://hirespace.com/Spaces/6485/Walthamstow-Pumphouse-Museum/Victoria-Line-Carriage/Film-and-Photo'>Victoria Tube Carriage at Walthamstow</a> - you're going nowhere fast.",
		"<h5 class='upper'>Outta Space</h5>Like the <a href='http://hirespace.com/Venues/2400/The-Safehouses-Maverick-Project'>Safehouses in Peckham</a>, you're damp, peeling and in dire need of renovation",
		"<h5 class='upper'>Space Bar</h5>Oh dear! Your knowledge is as tiny as <a href='http://hirespace.com/Spaces/10615/ArtsLav/The-Lavs/Film-and-Photo'>Arts Lav</a> - and it could do with a bit of a spring clean.",
		"<h5 class='upper'>Space Cadet</h5>A <a href='http://hirespace.com/Venues/1894/Clerkenwell-Centre'>Clerkenwell Centre</a> convert - you're keen and learning quickly. We advise some sports event themed promotions.",
		"<h5 class='upper'>Between a Rock and a Hire Space</h5>Your self-esteem might be crumbling like the walls of <a href='http://hirespace.com/Spaces/7178/The-Asylum/The-Chapel/Film-Photo'>The Asylum</a> - but don't worry, you're only a quick renovation away from brilliance.",
		"<h5 class='upper'>Watch this Space</h5>Like <a href='http://hirespace.com/Spaces/7293/Tanner-and-Co/The-Event-Space/Events'>Tanner and Co</a>, you're a rising star on the events scene. More practice and fewer scotch eggs, you'll be a winner.",
		"<h5 class='upper'>Super Space Freak</h5>Like <a href='http://hirespace.com/Venues/210/SearcysThe-Gherkin'>Searcy's at the Gherkin</a>, you think you're above everyone else - and you are."
		]
	}
	// The answers!
	function answers() {
		return [
		"1",
		"3",
		"2",
		"2",
		"1",
		"3",
		"1"
		];
	}

});