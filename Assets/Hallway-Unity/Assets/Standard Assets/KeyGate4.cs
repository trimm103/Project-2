using UnityEngine;
using System.Collections;

public class KeyGate4 : MonoBehaviour {
	
	void OnTriggerEnter(Collider collider) {
		if(collider.gameObject.name == "Player" && GameVariables.keyCount4>0) {
			GameVariables.keyCount4--;
			Destroy (gameObject);
		}
	}
}
