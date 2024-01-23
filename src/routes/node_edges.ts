import type { Node, Edge } from '@xyflow/svelte';
import { writable, type Writable } from 'svelte/store';
import { Position, MarkerType } from '@xyflow/svelte';

export type FlowState = {
  color: string;
  zoom: number;
  shape: string;
};

const flowState = writable<FlowState>({
  color: '#ff4000',
  zoom: 17,
  shape: 'cube'
});

export type NodeData = {
  flowState: Writable<FlowState>;
  label: string;
};

export const initialNodes: Node[] = [
  // {
  //   id: '1',
  //   type: 'input',
  //   data: {
  //     label: 'Input Node'
  //   },
  //   position: { x: 250, y: 0 }
  // },
  // {
  //   id: '2',
  //   data: {
  //     label: 'Default Node'
  //   },
  //   position: { x: 100, y: 100 }
  // },
  // {
  //   id: '3',
  //   type: 'output',
  //   data: {
  //     label: 'Output Node'
  //   },
  //   position: { x: 400, y: 100 }
  // },
  // {
  //   id: '4',
  //   type: 'custom',
  //   position: { x: 100, y: 200 },
  //   data: {
  //     selects: {
  //       'handle-0': 'step',
  //       'handle-1': 'default'
  //     }
  //   }
  // },
  // {
  //   id: '5',
  //   type: 'output',
  //   data: {
  //     label: 'Output 1'
  //   },
  //   class: 'circle',
  //   position: { x: 400, y: 200 },
  //   sourcePosition: Position.Right,
  //   targetPosition: Position.Left
  // },
  // {
  //   id: '6',
  //   type: 'output',
  //   class: 'custom-style',
  //   data: {
  //     label: 'Output 2'
  //   },
  //   position: { x: 400, y: 325 },
  //   sourcePosition: Position.Right,
  //   targetPosition: Position.Left
  // },
  {
    id: 'hero',
    type: 'hero',
    position: { x: 390, y: 50 },
    data: {
      flowState,
      label: 'output'
    },
    class: 'w-[200px] lg:w-[300px]'
  },
  {
    id: 'color',
    type: 'colorpicker',
    position: { x: 50, y: 0 },
    data: {
      flowState,
      label: 'shape color'
    },
    class: 'w-[150px]'
  },
  {
    id: 'shape',
    type: 'switcher',
    position: { x: 0, y: 125 },
    data: {
      flowState,
      label: 'shape type'
    },
    class: 'w-[150px]'
  },
  {
    id: 'zoom',
    type: 'slider',
    position: { x: 40, y: 280 },
    data: {
      flowState,
      label: 'zoom level'
    },
    class: 'w-[150px]'
  }
  
];

export const initialEdges: Edge[] = [
  // { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
  // { id: 'e1-3', source: '1', target: '3', animated: true },
  // {
  //   id: 'e4-5',
  //   source: '4',
  //   target: '5',
  //   type: 'smoothstep',
  //   sourceHandle: 'handle-0',
  //   data: {
  //     selectIndex: 0
  //   },
  //   markerEnd: {
  //     type: MarkerType.ArrowClosed
  //   }
  // },
  // {
  //   id: 'e4-6',
  //   source: '4',
  //   target: '6',
  //   type: 'smoothstep',
  //   sourceHandle: 'handle-1',
  //   data: {
  //     selectIndex: 1
  //   },
  //   markerEnd: {
  //     type: MarkerType.ArrowClosed
  //   }
  // }
  {
    id: 'color->hero',
    source: 'color',
    target: 'hero',
    targetHandle: 'color',
    animated: true
  },
  {
    id: 'shape->hero',
    source: 'shape',
    target: 'hero',
    targetHandle: 'shape',
    animated: true
  },
  {
    id: 'zoom->hero',
    source: 'zoom',
    target: 'hero',
    targetHandle: 'zoom',
    animated: true
  }
];
