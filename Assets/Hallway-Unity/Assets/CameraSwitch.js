#pragma strict
var pepe1 : GameObject;
var pepe2 : GameObject;
var pepe3 : GameObject;
var pepe4 : GameObject;
var pepe5 : GameObject;

var camera1 : Camera;
var camera2 : Camera;

var cameraAnim : Animator;

var sound1 : AudioClip;
var sound2 : AudioClip;

var player : GameObject;

function Start () {
	player = GameObject.Find("Player");
	cameraAnim = GameObject.Find("CinematicCamera").GetComponent("Animator");
	cameraAnim.enabled = false;
}

function Update () {

}


function OnTriggerEnter (other : Collider) {

	GameObject.Find("Player").GetComponent(CharacterMotor).enabled = false;
	GameObject.Find("Player").GetComponent(MouseLook).enabled = false;
	yield WaitForSeconds (1.5);

	camera1.camera.enabled = false;
	camera2.camera.enabled = true;
	player.transform.position = Vector3(345,5,86);
	cameraAnim.enabled = true;
	audio.PlayOneShot(sound1);
	yield WaitForSeconds (2.9);
	cameraAnim.enabled = false;
	audio.PlayOneShot(sound2);
	GameObject.Find("CinematicCamera").GetComponent(FadeOut).enabled = false;
	
	pepe1.renderer.enabled = true;
	pepe2.renderer.enabled = true;
	pepe3.renderer.enabled = true;
	pepe4.renderer.enabled = true;
	pepe5.renderer.enabled = true;

	

}