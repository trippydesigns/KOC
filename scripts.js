document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.addEventListener('mouseenter', () => {
        heroContent.classList.add('highlight');
    });
    heroContent.addEventListener('mouseleave', () => {
        heroContent.classList.remove('highlight');
    });

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('3d-container').appendChild(renderer.domElement);

    const loader = new THREE.GLTFLoader();
    loader.load('assets/models/sample-model.glb', function(gltf) {
        scene.add(gltf.scene);
        gltf.scene.position.set(0, 0, -5); // Adjust position as needed
    });

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
});
