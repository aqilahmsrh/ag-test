# Git Actions + CICD Workflow

Work Test

Date:
    # 17.08.2021.8:23AM
    - 8:24
    - Test one more
    - Test 3

### Cloudformation Command to run in GitActions

``` aws cloudformation create-stack --stack-name cfcd-actions-workflow --template-body file://function-update.yaml --capabilities CAPABILITY_AUTO_EXPAND CAPABILITY_NAMED_IAM CAPABILITY_IAM ```

``` aws cloudformation create-change-set --stack-name cfcd-actions-workflow --change-set-name cfcd-actions-workflow-changeset --template-body file://function-update.yaml --capabilities CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND CAPABILITY_IAM ```


## Deploy GitActions with Codepipleine for double layer approval
[*] Main(branch) workflow without codepipeline
[*] Main workflow with codepipline single workflow
[*] Main workflow with codepipeline double workflow. GitActions workflow on main branch. Codepipeline workflow on a seperate branch

### Checklist
 [*] Main workflow is working. Deployed Cloudformation change set with sam. Deploys serverless from S3 and not from <build> directory on GitHub
    - Main workflow deploys without going through AWS codepipeline 
 [-] Branch release-dev-gitactions-codepipeline - Attempting to modify workflow to deploy from github instead of S3 as implemented in main
 [-] Branch release-dev - still in progress. In tend to apply Manual approval here