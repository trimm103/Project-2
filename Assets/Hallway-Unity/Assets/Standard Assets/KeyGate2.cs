using UnityEngine;
using System.Collections;

public class KeyGate2 : MonoBehaviour {

	void OnTriggerEnter(Collider collider) {
		if(collider.gameObject.name == "Player" && GameVariables.keyCount2>0) {
			GameVariables.keyCount2--; 
			Destroy (gameObject);
		}
	}
}
