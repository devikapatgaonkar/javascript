var interviewEligibility = function (gradScore,hscScore,sscScore,candidateName) {
    if (gradScore>=70 || hscScore>=80 || sscScore>90) {
        console.log(`Congrats ${candidateName} you are eligible for TCS interview`);
        
    } else {
        console.log(`Unfournately ${candidateName} you are not eligible for interview`);
    }
}
interviewEligibility(80,86,90,"Devika");
interviewEligibility(70,65,55,"Jennie");
interviewEligibility(60,79,88,"Julie")