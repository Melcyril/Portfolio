import { group } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-animation-tree',
  templateUrl: './animation-tree.component.html',
  styles: [
  ]
})
export class AnimationTreeComponent {
  constructor(private globalService: GlobalService) {}
  @ViewChild('animationContainer', { static: true })
  animationContainer!: ElementRef;
  animationHeight: number =0

  private textureLoader:THREE.TextureLoader= new THREE.TextureLoader;
  private scene: THREE.Scene = new THREE.Scene;
  private camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer;
  private group=new THREE.Group()

  

  ngOnInit(): void {

    this.animationHeight = window.innerHeight*7


    this.initScene();
    this.createBoule();
    this.animate();
  }

  private initScene(): void {
    this.scene = new THREE.Scene();

    // Ajustez la taille de la scène (doublée ici)

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);

    this.renderer = new THREE.WebGLRenderer({antialias:true,alpha: true}); //antialias empeche l'aliasing
    this.renderer.setClearColor(0x000000,0)
    this.renderer.setSize(window.innerWidth, this.animationHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)) //adapte la resolution
    this.animationContainer.nativeElement.appendChild(this.renderer.domElement);


    //this.scene.add(new THREE.AxesHelper())
    this.camera.position.z=3;
    this.camera.position.y=0.5;
    this.camera.position.x=0.5;
    this.scene.add(this.camera)
  }
  private resize(){

  }
  private createBoule(){


        //Loading alphaMap=boule2.png->boule blanche fond noire
        const alphaMap=this.textureLoader.load("assets/boule2.png")
    
        //nbre de boule souhaité, distance d'affichage, horloge
        const count=70
        const distance=2;

    

    
    
        //Tableau de points
        const mespoints = new Float32Array(count*3) // 3 car cordonnée x+y+z
        const colors=new Float32Array(count*3) //3 car rgb
        for(let i=0;i<mespoints.length;i++){
          //randFloatSpread genere un entier aléatoirement la distance compris entre -1 et 1
          mespoints[i]=THREE.MathUtils.randFloatSpread(distance*2); 
          //Couleur aléatoire 
          colors[i]=Math.random();
        }
        //Geometry de la boule avec insertion des valeurs en changeant l'attribut position et couleur
        const geometry=new THREE.BufferGeometry()
        geometry.setAttribute('position',new THREE.Float32BufferAttribute(mespoints,3))
        geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3))
    
        //Material 
        let points= new THREE.Points()
        const pointMaterial= new THREE.PointsMaterial({size:0.1,color:'orange',vertexColors:true,alphaTest:0.5,alphaMap:alphaMap,transparent:true,})
        points=new THREE.Points(geometry,pointMaterial)
        this.scene.add(points)
    
        //Creation d'un groupe de points
       
        this.group.add(points)
    
        //Ligne entre les boules
        const lineMaterial= new THREE.LineBasicMaterial({ transparent: true,opacity:0.4,depthTest:true,color:0xFF00000})
        const lineObject=new THREE.Line(geometry,lineMaterial)
        this.group.add(lineObject)
    
        this.scene.add(this.group)
       
        
  }
  private animate(): void {
                  // Position de la souris
                  let mouseX=0;
                  window.addEventListener('mousemove',e=>{
                    mouseX=e.clientX;
                  })
    const clock=new THREE.Clock()
    //controls permet de manipuler l'element avec la souris
    //const controls=new OrbitControls(this.camera,this.renderer.domElement)
    let isMovingForward = true;
    //Animation
    const animateFrame = () => {
      requestAnimationFrame(animateFrame);
      //this.camera.position.z+=0.001 //cam bouge vers la droite
      //this.camera.lookAt(0,0,0) //centre la camera
      //this.group.rotateY(0.001*Math.PI)
    

      //------Rotation avec la souris------
      //const ratio=(mouseX/window.innerWidth-0.5)*2 //Pour avoir Valeur entre 1 et -1
      //this.group.rotation.y=ratio*Math.PI
          // Mettez à jour la vue de la caméra
          // Faites avancer ou reculer la caméra
    if (isMovingForward) {
      this.camera.position.z -= 0.0005; // Vitesse d'avancement
      this.group.rotateY(-0.0005)
  } else {
      this.camera.position.z += 0.0005; // Vitesse de recul
      this.group.rotateY(0.0005)
  }

  // Inversez la direction lorsque la caméra atteint une certaine position
  if (this.camera.position.z <= 1 || this.camera.position.z >= 3) {
      isMovingForward = !isMovingForward;
  }
      this.camera.lookAt(this.scene.position);
      this.renderer.render(this.scene, this.camera);

    
      //controls.update()


    };
    animateFrame();

    //Adaptation au resize de l'utilisateur
    window.addEventListener('resize',()=>{
      this.camera.aspect=window.innerWidth/window.innerHeight //changement de l'aspect
      this.camera.updateProjectionMatrix() //met a jour la camera
      this.renderer.setSize(window.innerWidth,this.animationHeight) //resize de l'affichage
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)) //adapte la resolution
    })

  }
}
