using UnityEngine;
using System.Collections;

public class KeyItem2 : MonoBehaviour {
	void OnTriggerEnter(Collider collider) {
		if(collider.gameObject.name == "Player") {
			GameVariables.keyCount2+=1; 
			Destroy (gameObject);
		}
	}
}