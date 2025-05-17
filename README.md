# Project Context: Real-time "Heads Up" Clone with Video Chat

**Goal:** Develop a web application enabling groups of random users to join game rooms and play a real-time game similar to "Heads Up". Users need to see and hear each other via video/audio chat to facilitate gameplay (describing words/phrases for a guesser).

**Core Features:**
1.  **User Authentication/Joining:** Simple mechanism for users to join the platform (initially, maybe just nicknames).
2.  **Room Creation/Joining:** Users can create or join specific game rooms.
3.  **Multi-User Video/Audio Chat:** Real-time, peer-to-peer video and audio streaming between all users within a room using WebRTC.
4.  **Real-time Game Logic:**
    *   Synchronization of game state (current player, score, timer, current word).
    *   Designated "guesser" role per round.
    *   Displaying words/phrases only to "describers".
    *   Timer mechanism.
    *   Scoring based on correct guesses.
    *   Ability to skip words.
5.  **Card Deck/Categories:** System for managing and selecting categories/decks of words/phrases.

**Technology Stack:**
*   **Frontend:** Next.js (v13+ with App Router), React, TypeScript, Tailwind CSS (optional but likely).
*   **Backend:** Node.js, Express.js, TypeScript.
*   **Real-time Communication:**
    *   **WebSockets (Socket.IO):** For signaling (WebRTC connection negotiation), room management, and game state synchronization.
    *   **WebRTC:** For direct peer-to-peer video and audio streams.
*   **Development Environment:** Docker & Docker Compose for containerizing frontend and backend services.
*   **AI Assistant:** Cursor AI (running locally).

**Architecture:**
*   **Client-Server Model:** The Next.js frontend acts as the client, interacting with the Node.js backend.
*   **Backend Responsibilities:** Manages WebSocket connections, user sessions (within rooms), room logic, game state, and acts as the signaling server for WebRTC.
*   **Frontend Responsibilities:** Renders the UI, captures user input, handles camera/microphone access (`getUserMedia`), establishes and manages WebRTC peer connections, displays local and remote video/audio streams, and communicates game actions/events to the backend via WebSockets.
*   **Peer-to-Peer Media:** Video/audio data flows directly between users' browsers via WebRTC once connections are established (facilitated by the signaling server).

**Project Structure (Initial Plan):**
*   Root directory containing `docker-compose.yml`.
*   `./frontend/`: Contains the Next.js application code and its `Dockerfile`.
*   `./backend/`: Contains the Node.js/Express application code and its `Dockerfile`.

**Development Plan Phases:**
1.  **Setup (Current):** Docker environment setup (`Dockerfile`s, `docker-compose.yml`), project initialization (Next.js, Node.js), basic WebSocket connection between frontend and backend containers.
2.  **WebRTC Basics:** Implement 1-on-1 video/audio connection using WebRTC and WebSocket signaling.
3.  **Room Management:** Allow joining/leaving rooms, broadcast room state, establish WebRTC connections between all peers in a room.
4.  **Game Logic:** Implement core "Heads Up" mechanics (roles, words, timer, score) synchronized via WebSockets.
5.  **Polish & Deployment:** UI/UX improvements, potential database integration for cards, deployment preparation.

**Current Step:** Focus on Phase 1 - creating the `Dockerfile` for the Next.js frontend service within the Docker setup.
