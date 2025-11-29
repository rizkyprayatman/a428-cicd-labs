node {

    stage('Checkout') {
        git branch: 'react-app', url: 'https://github.com/rizkyprayatman/a428-cicd-labs.git'
    }

    stage('Install Dependencies') {
        sh '''
        docker run --rm -v $WORKSPACE:/app -w /app node:16-alpine npm install
        '''
    }

    stage('Build React App') {
        sh '''
        docker run --rm -v $WORKSPACE:/app -w /app node:16-alpine npm run build
        '''
    }

    stage('Test') {
        sh '''
        docker run --rm -v $WORKSPACE:/app -w /app node:16-alpine npm test -- --watchAll=false
        '''
    }

    stage('Manual Approval') {
        timeout(time: 5, unit: 'MINUTES') {
            input message: "Lanjutkan ke tahap Deploy?"
        }
    }

    stage('Deploy') {
        sh '''
        docker stop react-app || true
        docker rm react-app || true
        docker build -t react-app .
        docker run -d -p 9000:80 --name react-app react-app
        '''
    }

    stage('Run for 1 Minute') {
        echo "Aplikasi berjalan selama 1 menit..."
        sh "sleep 60"
        sh "docker stop react-app"
        echo "Aplikasi telah dimatikan."
    }

    stage('Archive Build Artifacts') {
        archiveArtifacts artifacts: 'build/**', fingerprint: true
    }
}
