/* Create a QA-friendly score classifier for practice readiness. */

function classifyJsBasicsScore(score) {
  if(score>=90){
    console.log("EXCELLENT");
    }
    else if(score>=70)
    {
    console.log("GOOD");
    }
    else if(score>=50){console.log("ANEEDS_PRACTICE"); }
    else{console.log("REVISIT");}

}
classifyJsBasicsScore(95);
classifyJsBasicsScore(75);
classifyJsBasicsScore(50);
classifyJsBasicsScore(32);