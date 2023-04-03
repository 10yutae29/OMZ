/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 custom_cat.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Sphere010: THREE.Mesh;
    Sphere010_1: THREE.Mesh;
    Sphere010_2: THREE.Mesh;
    Sphere010_3: THREE.Mesh;
    Sphere010_4: THREE.Mesh;
    Sphere010_5: THREE.Mesh;
    Sphere010_6: THREE.Mesh;
    Sphere010_7: THREE.Mesh;
    Sphere010_8: THREE.Mesh;
    Sphere010_9: THREE.Mesh;
    Sphere010_10: THREE.Mesh;
    Sphere010_11: THREE.Mesh;
    Sphere010_12: THREE.Mesh;
    Sphere010_13: THREE.Mesh;
    Sphere010_14: THREE.Mesh;
    Sphere010_15: THREE.Mesh;
    alien_glasses: THREE.Mesh;
    angel_hat: THREE.Mesh;
    angel_wing: THREE.Mesh;
    white_cap: THREE.Mesh;
    arab_object: THREE.Mesh;
    arab_object_1: THREE.Mesh;
    balloon_object: THREE.Mesh;
    balloon_object_1: THREE.Mesh;
    bat_object: THREE.Mesh;
    bat_object_1: THREE.Mesh;
    circle_glasses: THREE.Mesh;
    heart_glasses: THREE.Mesh;
    magic_object: THREE.Mesh;
    magic_object_1: THREE.Mesh;
    my_glasses: THREE.Mesh;
    santa_object: THREE.Mesh;
    santa_object_1: THREE.Mesh;
    star_glasses: THREE.Mesh;
    vampire_object: THREE.Mesh;
    vampire_object_1: THREE.Mesh;
    fish_bone: THREE.Mesh;
  };
  materials: {
    ["Material.012"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["Material.015"]: THREE.MeshStandardMaterial;
    ["Material.017"]: THREE.MeshStandardMaterial;
    alien_material: THREE.MeshStandardMaterial;
    angel_hat_material: THREE.MeshStandardMaterial;
    angel_wing_material: THREE.MeshStandardMaterial;
    white_material: THREE.MeshStandardMaterial;
    arab_material_1: THREE.MeshStandardMaterial;
    arab_material_2: THREE.MeshStandardMaterial;
    balloon_material_1: THREE.MeshStandardMaterial;
    balloon_material_2: THREE.MeshStandardMaterial;
    bat_object_1: THREE.MeshStandardMaterial;
    bat_object_2: THREE.MeshStandardMaterial;
    circle_glasses_material: THREE.MeshStandardMaterial;
    heart_glasses_material: THREE.MeshStandardMaterial;
    magic_material_1: THREE.MeshStandardMaterial;
    magic_material_2: THREE.MeshStandardMaterial;
    mymaterial: THREE.MeshStandardMaterial;
    santa_material_1: THREE.MeshStandardMaterial;
    santa_materail_2: THREE.MeshStandardMaterial;
    star_material: THREE.MeshStandardMaterial;
    vampire_material1: THREE.MeshStandardMaterial;
    vampire_material2: THREE.MeshStandardMaterial;
    fish_bone_material: THREE.MeshStandardMaterial;
  };
};
interface Item {
  [key: string]: number;
}
type Props = {
  position: number[];
  itemStatus?: Item;
};

export function Custom_cat({ position, itemStatus }: Props) {
  const { nodes, materials } = useGLTF("/3D/custom_cat.glb") as GLTFResult;

  // 안경 custom
  const selectGlasses = () => {
    switch (itemStatus?.glasses) {
      case 1:
        // 하트 안경
        return (
          <>
            <mesh
              geometry={nodes.heart_glasses.geometry}
              material={materials.heart_glasses_material}
              position={[-0.27, 3.19, 0.38]}
              rotation={[0.23, -0.74, 0.15]}
              scale={0.32}
            />
          </>
        );
      case 2:
        // 별 안경
        return (
          <>
            <mesh
              geometry={nodes.star_glasses.geometry}
              material={materials.star_material}
              position={[-0.22, 3.06, 0.28]}
              rotation={[3.13, -0.81, 3.14]}
              scale={0.3}
            />
          </>
        );
      case 3:
        // alien 안경
        return (
          <>
            <mesh
              geometry={nodes.alien_glasses.geometry}
              material={materials.alien_material}
              position={[-0.11, 3.1, 0.15]}
              rotation={[-3.14, -0.82, -3.13]}
              scale={0.32}
            />
          </>
        );
      case 4:
        // 동그란 안경
        return (
          <>
            <mesh
              geometry={nodes.circle_glasses.geometry}
              material={materials.circle_glasses_material}
              position={[-0.21, 3.04, 0.27]}
              rotation={[-3.12, -0.81, -3.07]}
              scale={0.3}
            />
          </>
        );
      case 5:
        // 마이안경
        return (
          <>
            <mesh
              geometry={nodes.my_glasses.geometry}
              material={materials.mymaterial}
              position={[-0.14, 3.02, 0.17]}
              rotation={[-3.14, -0.81, -3.12]}
              scale={0.3}
            />
          </>
        );
    }
  };
  // 모자 custom
  const selectHat = () => {
    switch (itemStatus?.hat) {
      case 1:
        // 천사 링
        return (
          <>
            <mesh
              geometry={nodes.angel_hat.geometry}
              material={materials.angel_hat_material}
              position={[-0.16, 3.88, 0.58]}
              rotation={[-1.58, 0.02, 0.42]}
              scale={0.3}
            />
          </>
        );
      case 2:
        // 아랍 모자
        return (
          <>
            <group
              position={[0.44, 2.08, -0.37]}
              rotation={[0.01, -0.66, -0.01]}
              scale={[2.11, 1.91, 2.23]}
            >
              <mesh
                geometry={nodes.arab_object.geometry}
                material={materials.arab_material_1}
              />
              <mesh
                geometry={nodes.arab_object_1.geometry}
                material={materials.arab_material_2}
              />
            </group>
          </>
        );
      case 3:
        // 마법 모자
        return (
          <>
            <group position={[0.14, 3.6, -0.1]} scale={[0.77, 0.39, 0.77]}>
              <mesh
                geometry={nodes.magic_object.geometry}
                material={materials.magic_material_1}
              />
              <mesh
                geometry={nodes.magic_object_1.geometry}
                material={materials.magic_material_2}
              />
            </group>
          </>
        );
      case 4:
        // 산타 모자
        return (
          <>
            <group
              position={[0.11, 3.2, -0.05]}
              rotation={[-1.58, 0.01, -2.43]}
              scale={[0.77, 0.8, 0.69]}
            >
              <mesh
                geometry={nodes.santa_object.geometry}
                material={materials.santa_material_1}
              />
              <mesh
                geometry={nodes.santa_object_1.geometry}
                material={materials.santa_materail_2}
              />
            </group>
          </>
        );
      case 5:
        // 털 모자
        return (
          <>
            <mesh
              geometry={nodes.white_cap.geometry}
              material={materials.white_material}
              position={[0.17, 3.4, -0.14]}
              rotation={[-1.76, 0.18, -0.65]}
              scale={0.75}
            />
          </>
        );
    }
  };
  // 날개 custom
  const selectWing = () => {
    switch (itemStatus?.wing) {
      case 1:
        // 천사 날개
        return (
          <>
            <mesh
              geometry={nodes.angel_wing.geometry}
              material={materials.angel_wing_material}
              position={[0.25, 0.54, -0.35]}
              rotation={[3.14, 0.72, -3.13]}
              scale={0.16}
            />
          </>
        );
      case 2:
        // 박쥐 날개
        return (
          <>
            <group
              position={[0.58, 1.44, -0.57]}
              rotation={[-1.35, -0.19, -0.72]}
              scale={0.44}
            >
              <mesh
                geometry={nodes.bat_object.geometry}
                material={materials.bat_object_1}
              />
              <mesh
                geometry={nodes.bat_object_1.geometry}
                material={materials.bat_object_2}
              />
            </group>
          </>
        );
      case 3:
        // 풍선
        return (
          <>
            <group
              position={[-0.66, 1.85, 0.56]}
              rotation={[0.23, -0.02, -0.15]}
              scale={-0.06}
            >
              <mesh
                geometry={nodes.balloon_object.geometry}
                material={materials.balloon_material_1}
              />
              <mesh
                geometry={nodes.balloon_object_1.geometry}
                material={materials.balloon_material_2}
              />
            </group>
          </>
        );
      case 4:
        // 뱀파이어 망토
        return (
          <>
            <group
              position={[0.04, 3.31, -0.03]}
              rotation={[0, -0.76, 0.02]}
              scale={1.87}
            >
              <mesh
                geometry={nodes.vampire_object.geometry}
                material={materials.vampire_material1}
              />
              <mesh
                geometry={nodes.vampire_object_1.geometry}
                material={materials.vampire_material2}
              />
            </group>
          </>
        );
      case 5:
        // 랜덤(개껌)
        return (
          <>
            <mesh
              geometry={nodes.fish_bone.geometry}
              material={materials.fish_bone_material}
              position={[0.69, 1.54, 0.62]}
            />
          </>
        );
    }
  };
  const props: any = { position };
  return (
    <group {...props} dispose={null}>
      {selectGlasses()}
      {selectHat()}
      {selectWing()}
      <group
        position={[0.16, 3.3, 0.35]}
        rotation={[0, -0.75, -0.66]}
        scale={0.21}
      >
        <mesh
          geometry={nodes.Sphere010.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          geometry={nodes.Sphere010_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Sphere010_2.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Sphere010_3.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Sphere010_4.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Sphere010_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Sphere010_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Sphere010_7.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes.Sphere010_8.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Sphere010_9.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          geometry={nodes.Sphere010_10.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Sphere010_11.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          geometry={nodes.Sphere010_12.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          geometry={nodes.Sphere010_13.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Sphere010_14.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          geometry={nodes.Sphere010_15.geometry}
          material={materials["Material.017"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3D/custom_cat.glb");
