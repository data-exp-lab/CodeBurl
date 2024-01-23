import { writable } from 'svelte/store';
import { Position, MarkerType } from '@xyflow/svelte';
export const nodes = writable([
  {
    id: '1',
    type: 'input',
    data: {
      label: 'Input Node'
    },
    position: { x: 250, y: 0 }
  },
  {
    id: '2',
    data: {
      label: 'Default Node'
    },
    position: { x: 100, y: 100 }
  },
  {
    id: '3',
    type: 'output',
    data: {
      label: 'Output Node'
    },
    position: { x: 400, y: 100 }
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 100, y: 200 },
    data: {
      selects: {
        'handle-0': 'smoothstep',
        'handle-1': 'smoothstep'
      }
    }
  },
  {
    id: '5',
    type: 'output',
    data: {
      label: 'custom style'
    },
    class: 'circle',
    position: { x: 400, y: 200 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left
  },
  {
    id: '6',
    type: 'output',
    class: 'custom-style',
    data: {
      label: 'Node'
    },
    position: { x: 400, y: 325 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left
  }
]);

export const edges = writable([
  { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'smoothstep',
    sourceHandle: 'handle-0',
    data: {
      selectIndex: 0
    },
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: 'e4-6',
    source: '4',
    target: '6',
    type: 'smoothstep',
    sourceHandle: 'handle-1',
    data: {
      selectIndex: 1
    },
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  }
]);