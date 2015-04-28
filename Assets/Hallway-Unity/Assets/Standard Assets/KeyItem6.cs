using UnityEngine;
using System.Collections;

public class KeyItem6 : MonoBehaviour {
	void OnTriggerEnter(Collider collider) {
		if(collider.gameObject.name == "Player") {
			GameVariables.keyCount6+=1; 
			Destroy (gameObject);
		}
	}
}