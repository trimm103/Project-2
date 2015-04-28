using UnityEngine;
using System.Collections;

public class KeyItem5 : MonoBehaviour {
	void OnTriggerEnter(Collider collider) {
		if(collider.gameObject.name == "Player") {
			GameVariables.keyCount5+=1; 
			Destroy (gameObject);
		}
	}
}