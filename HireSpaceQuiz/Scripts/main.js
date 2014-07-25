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
			thisAnswer = thisAnswer.val();
			var correctAnswer = answers()[thisButton.data('question') - 1];

			console.log(totalScore);
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
		$('[data-role="score"]').html(localStorage.totalScore + ' out of ' + localStorage.totalQuestions);
		$('[data-role="score-description"]').html(descriptions()[localStorage.totalScore]);
		$('.addthis_sharing_toolbox').attr('data-title', ('I scored ' + localStorage.totalScore + ' out of ' + localStorage.totalQuestions + ' on the Hire Space Quiz! Give it a go!'));
	}

	// The final score descriptions
	function descriptions() {
		return [
		"<h5 class='upper'>Spaced Out</h5>Old and Rusty and like the Victoria Tube Carriage at Walthamstow - you're going nowhere fast.",
		"<h5 class='upper'>Waste of Space</h5>Wuhoh! Like Shoreditch Town Hall, you talk big but you're just a load of empty space.",
		"<h5 class='upper'>Space Cadet</h5>Like the Safehouses in Peckham, whilst you've got a lot of potential, you just aren't quite there yet. You've let yourself go, peeling paint and a slightly damp smell. You think you're a cool derelict venue - we think you're a run down set of public loos",
		"<h5 class='upper'>Space Bar</h5>A Clerkenwell Centre convert - you're keen but just a bit uninspired. We advise some sports event themed promotions.",
		"<h5 class='upper'>Watch this Space</h5>Like Tanner and Co, you're a rising star on the events scene. More practice and fewer scotch eggs, you'll be a winner.",
		"<h5 class='upper'>Super Space Freak</h5>Like Searcy's at the Gherkin, snotty and you deserve to be."
		]
	}
	// The answers!
	function answers() {
		return [
		"1",
		"3",
		"2",
		"2",
		"1"
		];
	}

});