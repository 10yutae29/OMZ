/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 custom_fox.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube008: THREE.Mesh;
    NurbsPath: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube010_1: THREE.Mesh;
    alien_glasses: THREE.Mesh;
    angel_hat: THREE.Mesh;
    angel_wing: THREE.Mesh;
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
    santa_object: THREE.Mesh;
    santa_object_1: THREE.Mesh;
    star_glasses: THREE.Mesh;
    vampire_object: THREE.Mesh;
    vampire_object_1: THREE.Mesh;
    my_glasses: THREE.Mesh;
    flower_object: THREE.Mesh;
    flower_object_1: THREE.Mesh;
    flower_object_2: THREE.Mesh;
    white_cap: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    alien_material: THREE.MeshStandardMaterial;
    angel_hat_material: THREE.MeshStandardMaterial;
    angel_wing_material: THREE.MeshStandardMaterial;
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
    santa_material_1: THREE.MeshStandardMaterial;
    santa_materail_2: THREE.MeshStandardMaterial;
    star_material: THREE.MeshStandardMaterial;
    vampire_material1: THREE.MeshStandardMaterial;
    vampire_material2: THREE.MeshStandardMaterial;
    mymaterial: THREE.MeshStandardMaterial;
    flower_material: THREE.MeshStandardMaterial;
    flower_material2: THREE.MeshStandardMaterial;
    flower_material3: THREE.MeshStandardMaterial;
    white_material: THREE.MeshStandardMaterial;
  };
};
interface Item {
  [key: string]: number;
}
type Props = {
  position: number[];
  itemStatus?: Item;
};

export function Custom_fox({ position, itemStatus }: Props) {
  const { nodes, materials } = useGLTF("/3D/custom_fox.glb") as GLTFResult;

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
              position={[-0.5, 2.79, 0.58]}
              rotation={[0.19, -0.69, 0.14]}
              scale={0.33}
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
              position={[-0.39, 2.7, 0.49]}
              rotation={[-3.09, -0.88, -3.02]}
              scale={0.31}
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
              position={[-0.25, 2.87, 0.32]}
              rotation={[-3.14, -0.82, -3.14]}
              scale={0.42}
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
              position={[-0.37, 2.7, 0.48]}
              rotation={[3.11, -0.87, -3.12]}
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
              position={[-0.31, 2.71, 0.38]}
              rotation={[3.14, -0.88, -3.13]}
              scale={0.33}
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
              position={[-0.21, 4.36, 0.73]}
              rotation={[-1.58, 0, 0.45]}
              scale={0.36}
            />
          </>
        );
      case 2:
        // 아랍 모자
        return (
          <>
            <group
              position={[0.19, 1.83, -0.12]}
              rotation={[0.01, -0.66, -0.01]}
              scale={[2.44, 1.93, 2.46]}
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
            <group
              position={[0.15, 3.76, -0.05]}
              rotation={[0.02, -0.68, -0.02]}
              scale={[1.04, 0.54, 0.84]}
            >
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
              position={[0.03, 2.92, -0.01]}
              rotation={[-1.58, 0.01, -2.43]}
              scale={[1.12, 1.1, 1]}
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
        // 쥐 모자
        return (
          <>
            <mesh
              geometry={nodes.white_cap.geometry}
              material={materials.white_material}
              position={[0.14, 3.05, -0.22]}
              rotation={[-1.79, 0.15, -0.59]}
              scale={1.09}
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
              position={[-0.3, 1.51, -0.8]}
              rotation={[2.97, 0.71, -3.02]}
              scale={0.15}
            />
          </>
        );
      case 2:
        // 박쥐 날개
        return (
          <>
            <group
              position={[0.45, 0.88, -0.45]}
              rotation={[-1.44, -0.09, -0.71]}
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
              position={[-1, 1.13, 0.63]}
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
              position={[0.13, 2.57, -0.03]}
              rotation={[0, -0.68, 0]}
              scale={[1.95, 1.71, 1.96]}
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
            <group
              position={[0.9, 1.39, 0.95]}
              rotation={[-0.74, 0.67, -0.61]}
              scale={0.61}
            >
              <mesh
                geometry={nodes.flower_object.geometry}
                material={materials.flower_material}
              />
              <mesh
                geometry={nodes.flower_object_1.geometry}
                material={materials.flower_material2}
              />
              <mesh
                geometry={nodes.flower_object_2.geometry}
                material={materials.flower_material3}
              />
            </group>
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
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials["Material.001"]}
        position={[0.07, 2.69, -0.07]}
        rotation={[0, -0.7, 0]}
        scale={[1.21, 1, 1]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials["Material.001"]}
        position={[0.07, 1.27, -0.07]}
        rotation={[0, -0.7, 0]}
        scale={0.68}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials["Material.002"]}
        position={[0.07, 2.69, -0.07]}
        rotation={[0, -0.7, 0]}
        scale={[1.21, 1, 1]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials["Material.002"]}
        position={[0.11, 2.65, -0.11]}
        rotation={[0, -0.7, 0]}
        scale={[1.21, 1, 1]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials["Material.002"]}
        position={[0.07, 1.27, -0.07]}
        rotation={[0, -0.7, 0]}
        scale={0.68}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials["Material.003"]}
        position={[0.07, 0.31, -0.07]}
        rotation={[0, -0.7, 0]}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={materials["Material.004"]}
        position={[0.07, 0.61, -0.07]}
        rotation={[0, -0.7, 0]}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials["Material.003"]}
        position={[-0.48, 2.51, 0.58]}
        rotation={[0, -0.7, 0]}
        scale={[0.07, 0.05, 0.04]}
      />
      <mesh
        geometry={nodes.NurbsPath.geometry}
        material={materials["Material.003"]}
        position={[-0.48, 2.34, 0.58]}
        rotation={[0.11, -0.7, 0.07]}
        scale={0.1}
      />
      <group
        position={[0.68, 0.9, -0.8]}
        rotation={[0, -0.7, 0]}
        scale={[0.34, 0.34, 0.59]}
      >
        <mesh
          geometry={nodes.Cube010.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube010_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3D/custom_fox.glb");
