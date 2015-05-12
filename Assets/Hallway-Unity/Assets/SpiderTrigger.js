
var hasplayed = false;
var entertrigger = false;

var spiderSound : AudioClip;
var spiderAnim : Animator;



function Start () {

	entertrigger = false;
	spiderAnim = GameObject.Find("spider").GetComponent("Animator");
	spiderAnim.enabled = false;


}


function OnTriggerEnter (other : Collider) {

	entertrigger = true;
	GameObject.Find("Player").GetComponent(CharacterMotor).enabled = false;
	
	spiderAnim.enabled = true;

}


function Update () {

	if (entertrigger == true) { 

		removeovertime ();
		spiderScream ();
		
	}
	
}




function removeovertime () {
	yield WaitForSeconds (1.5);


	GameObject.Find("Player").GetComponent(CharacterMotor).enabled = true;
	yield WaitForSeconds (1.0);
	spiderAnim.enabled = false;
	Destroy(this);

	
}


function spiderScream () {
	if (!hasplayed) {
		hasplayed = true;
		audio.PlayOneShot(spiderSound);
	
	}


}