node {

    stage('Checkout') {
        git branch: 'react-app', url: 'https://github.com/rizkyprayatman/a428-cicd-labs.git'
    }

    stage('Install Node 16') {
        sh '''
        curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
        apt-get update
        apt-get install -y nodejs
        node -v
        npm -v
        '''
    }

    stage('Install Dependencies') {
        sh 'npm install'
    }

    stage('Build React App') {
        sh 'npm run build'
    }

    stage('Test') {
        sh 'npm test -- --watchAll=false'
    }

    stage('Build Docker Image') {
        sh 'docker build -t react-app:latest .'
    }

    stage('Manual Approval') {
        timeout(time: 10, unit: 'MINUTES') {
            input message: 'Lanjutkan ke tahap Deploy?'
        }
    }

    stage('Deploy') {
        sh '''
        docker rm -f react-app || true
        docker run -d \
            --name react-app \
            -p 9000:80 \
            react-app:latest
        '''
        echo "⏳ Menunggu 60 detik sebelum pipeline selesai..."
        sleep 60
    }

    stage('Archive Build Artifacts') {
        archiveArtifacts artifacts: 'build/**', fingerprint: true
    }
}
