var face : GameObject;

var hasplayed = false;
var entertrigger = false;

var screamingsound : AudioClip;




function Start () {

	entertrigger = false;
	face.renderer.enabled = false;

}


function OnTriggerEnter (other : Collider) {

	entertrigger = true;
}


function Update () {

	if (entertrigger == true) { 
		face.renderer.enabled = true;
		removeovertime ();
		makehimscream ();
		
	}
}




function removeovertime () {
	yield WaitForSeconds (1.5);
	face.renderer.enabled = false;
	Destroy(face);
	Application.Quit();
	
}


function makehimscream () {
	if (!hasplayed) {
		hasplayed = true;
		audio.PlayOneShot(screamingsound);
	
	}


}