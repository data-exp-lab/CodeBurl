<script lang="ts">
    const onDragStart = (event: DragEvent, nodeType: string) => {
      if (!event.dataTransfer) {
        return null;
      }
  
      event.dataTransfer.setData('application/svelteflow', nodeType);
      event.dataTransfer.effectAllowed = 'move';
    };
  </script>
  
  <aside>
    <div class="label">Drag these nodes to the pane below.</div>
    <div class="nodes-container">
      <div
        class="custom-node node"
        on:dragstart={(event) => onDragStart(event, 'custom')}
        draggable={true}
      >
        Custom Node
      </div>
      <div
        class="default-node node"
        on:dragstart={(event) => onDragStart(event, 'default')}
        draggable={true}
      >
        Default Node
      </div>
      <div
        class="output-node node"
        on:dragstart={(event) => onDragStart(event, 'output')}
        draggable={true}
      >
        Output Node
      </div>
    </div>
  </aside>
  
  <style>
    aside {
      width: 100%;
      font-size: 12px;
      background-color: #f1f1f314;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    .label {
      margin: 1rem 0;
      font-size: 0.9rem;
    }
  
    .nodes-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .node {
      margin: 0.5rem;
      border: 1px solid #111;
      padding: 0.5rem 1rem;
      font-weight: 700;
      border-radius: 3px;
      cursor: grab;
    }
  </style>